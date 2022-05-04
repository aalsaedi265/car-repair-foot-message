class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create


    def create
        byebug
        user=User.find(params[:id] )
        if user&.authenticate(params[:password_digest])

            session[:user_id] = user.id
            render json: user
        else
            render json:{errors: ["Invalid pin try again"]}, status: unauthorized
        end
        # byebug
        # render json: 'the world'
    end
 

    def destroy
        session.delete :user_id
        head :no_content
    end

    private 

    def authorize
        render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
         end
end
