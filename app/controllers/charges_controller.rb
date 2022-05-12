class ChargesController < ApplicationController

    def create 
        @session = Stripe::Checkout::Session.create({
            payment_method_types: ['card'],
            line_items: [{
              name: name,
              price: price,
              current_user: 'usd'
              quantity: 1,
            }],
            mode: 'payment',
            success_url: 'http://localhost:3006/massage',
            cancel_url: 'https://example.com/cancel',
          })
    end

    private

    def checkout_items
        params.require(:checkout).permit(items:[])
    end

end
