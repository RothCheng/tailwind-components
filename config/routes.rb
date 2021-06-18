Rails.application.routes.draw do
  root to: 'tailwind#index'
  get 'tailwind', to: 'tailwind#index'
  resources :pages
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
