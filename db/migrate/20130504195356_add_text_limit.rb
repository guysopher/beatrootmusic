class AddTextLimit < ActiveRecord::Migration
  def up
    change_column :pages, :content, :text, :limit => nil
    change_column :pages, :order, :integer
  end

  def down
  end
end
