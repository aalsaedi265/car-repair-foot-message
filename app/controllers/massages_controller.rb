class MassagesController < ApplicationController


    def index
        render json:Massage.all
    end

    def show
        massage = Massage.find(params[:id])
        render json: massage, status: 200
    end

    def update
        # massage = Massage.find(params[:id])
        massage= @current_user.massages.update!(massage_params)
        render json: massage, status: 200
    end

    def create    
        massage= @current_user.massages.create!(massage_params)

        render json: massage, status: 200
    end

    def destroy
        massage= Massage.find(params[:id])
        massage.destroy
        head :no_content
    end


    private

    def massage_params
        params.permit(:user_id, :oil, :request, :price)
    end


end
