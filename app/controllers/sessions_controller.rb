class SessionsController < ApplicationController


    def create
        # byebug
        user=User.find_by(full_name: params[:full_name])

        if user&.authenticate(params[:password])

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
