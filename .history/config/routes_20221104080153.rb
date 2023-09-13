Rails.application.routes.draw do
  # get "/signup", to: "users#create"
  namespace :api do
    namespace :v1 do
        resources :games, only: [:index, :show, :create, :update, :destroy]
    end
  end
end
