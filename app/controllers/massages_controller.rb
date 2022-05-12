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
        # user=User.find_by(full_name: params[:full_name])

        # massage= user.Massage.update!(massage_params)
        # render json: massage, status: 200
    end

    def create   


        user=User.find(session[:user_id])
        massage =  user.massages.create!(massage_params)
       
        render json: massage, status: 200
    end

    def destroy
        massage= Massage.find(params[:id])
        massage.destroy
        head :no_content
    end


    
    private

    def massage_params
        params.permit(:user_id, :name, :request,:price)
    end

end
