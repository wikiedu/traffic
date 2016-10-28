class User < ApplicationRecord
  validates :username, presence: true
  validates :email, presence: true, uniqueness: true

  has_secure_password

  ROLE_ADMIN ="admin"
  ROLE_TRANSPORTER = "transporter"
  ROLE_CLIENT = "client"


  before_save :default_values

  def default_values
    self.role ||= ROLE_CLIENT
  end

end
