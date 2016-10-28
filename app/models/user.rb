class User < ApplicationRecord
  validates :username, presence: true
  validates :email, presence: true, uniqueness: true
  belongs_to :company, optional: true

  has_secure_password

  ROLE_ADMIN ="admin"
  ROLE_TRANSPORTER = "transporter"
  ROLE_CLIENT = "client"


  before_save :default_values

  def default_values
    self.role ||= ROLE_CLIENT
  end

  def clients
    if company
      company.clients
    end
  end

  def admin?
    role == ROLE_ADMIN
  end

  def transporter?
    role == ROLE_TRANSPORTER
  end

  def client?
    role == ROLE_CLIENT
  end

end
