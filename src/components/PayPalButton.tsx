'use client';

import { useEffect, useState } from 'react';

interface PayPalButtonProps {
  amount: number;
  currency?: string;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export default function PayPalButton({ 
  amount, 
  currency = 'USD',
  onSuccess,
  onError 
}: PayPalButtonProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || ''}&currency=${currency}&intent=capture`;
    script.async = true;
    script.onload = () => setLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [currency]);

  useEffect(() => {
    if (!loaded) return;
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const paypal = (window as any).paypal;
    if (!paypal) return;

    paypal.Buttons({
      style: {
        layout: 'vertical',
        color: 'gold',
        shape: 'rect',
        label: 'paypal',
      },
      createOrder: (_data: unknown, actions: { order: { create: (options: object) => unknown } }) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              currency_code: currency,
              value: amount.toFixed(2),
            },
          }],
        });
      },
      onApprove: async (data: { orderID: string }) => {
        try {
          const res = await fetch('/api/paypal/capture-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ orderId: data.orderID }),
          });
          
          const result = await res.json();
          
          if (result.status === 'COMPLETED') {
            onSuccess?.();
          } else {
            onError?.(new Error('Payment not completed'));
          }
        } catch (err) {
          onError?.(err as Error);
        }
      },
      onError: (err: Error) => {
        console.error('PayPal error:', err);
        onError?.(err);
      },
    }).render('#paypal-button-container');
  }, [loaded, amount, currency, onSuccess, onError]);

  return (
    <div id="paypal-button-container" className="min-h-[200px]">
      {!loaded && (
        <div className="flex items-center justify-center h-[200px]">
          <span className="text-gray-400">Loading PayPal...</span>
        </div>
      )}
    </div>
  );
}
