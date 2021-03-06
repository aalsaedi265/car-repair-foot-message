Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :charges, only: [:create]
  resources :car_shops, only: [:update,:index, :show,:create,:destroy]
  resources :massages, only: [:update,:index, :show,:create,:destroy]
  resources :users, only: [:index, :show, :create, :destroy]

 
  get "/me", to: "users#show"
  
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"

  get "/me/massage", to: "users#massage"
  get "/me/carshop", to: "users#car"

  post "/me/carshop", to: "carshop#create"
  post "/me/massage", to: "massage#create"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end