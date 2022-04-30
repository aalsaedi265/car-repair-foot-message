class UsersController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
        skip_before_action :authorize, only :create

        def index
            render json: User.all
        end

        def show 
            user=User.find(session[:user_id])
            render json: user
        end

        def show 
            render json: @current_user, status: 200
        end

        private

        
        def render_not_found
            render json: {error: "the employee"}, status: :not_found
        end

        def render_invalid(x)
            render json: { errors: x.record.errors.full_messages }, status: :unprocessable_entity 
        end
end
