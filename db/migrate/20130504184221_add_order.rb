class AddOrder < ActiveRecord::Migration
  def up
    add_column :pages, :order, :integer
  end

  def down
  end
end
