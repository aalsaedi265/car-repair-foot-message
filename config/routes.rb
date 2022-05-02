Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :car_shops, only: [:update,:index, :show,:create,:destroy]
  resources :massages, only: [:update,:index, :show,:create,:destroy]
  resources :users, only: [:index]

 
  get "/me", to: "users#show"

  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"

  get "/me/massage", to: "users#massage"
  get "/me/carshop", to: "users#car"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end