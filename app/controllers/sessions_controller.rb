class SessionsController < ApplicationController


    def create
        user=User.find(params[:id] )
        if user&.authenticate(params[:password_digest])

            session[:user_id] = user.id
            render json: user
        else
            render json:{errors: ["Invalid pin try again"]}, status: unauthorized
        end
    end
 

    def destroy
        session.delete :user_id
        head :no_content
    end
end
