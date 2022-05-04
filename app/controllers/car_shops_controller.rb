class CarShopsController < ApplicationController


    def index
        
        render json:CarShop.all
    end

    def show
        carshop = CarShop.find(params[:id])
        render json: carshop, status: 200
    end

    def update
        # carshop = CarShop.find(params[:id])
        carshop= @current_user.car_shops.update!(carshop_params)
        render json: carshop, status: 200
    end

    def create    
        carshop= @current_user.car_shops.create!(car_params)

        render json: carshop, status: 200
    end

    def destroy
        carshop= CarShop.find(params[:id])
        carshop.destroy
        head :no_content
    end


    private

    def car_params
        params.permit(:user_id, :server, :price)
    end

end
