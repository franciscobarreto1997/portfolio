Rails.application.routes.draw do
  root to: 'pages#home'
  get 'articles', to: 'pages#articles'
  get 'contact', to: 'pages#contact'
  get 'madwork', to: 'pages#madwork'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
