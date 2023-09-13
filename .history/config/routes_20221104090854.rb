Rails.application.routes.draw do
  # post "/signup", to: "users#create"
  # get "/me", to: "users#show"
  # post "/logout", to: "sessions#create"
  resources :users, only: [:index, :show, :create, :destroy]
  namespace :api do
    namespace :v1 do
        resources :games, only: [:index, :show, :create, :update, :destroy]
    end
  end
end
