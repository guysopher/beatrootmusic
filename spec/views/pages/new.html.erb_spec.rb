require 'spec_helper'

describe "pages/new" do
  before(:each) do
    assign(:page, stub_model(Page,
      :id => "",
      :name => "",
      :content => ""
    ).as_new_record)
  end

  it "renders new page form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => pages_path, :method => "post" do
      assert_select "input#page_id", :name => "page[id]"
      assert_select "input#page_name", :name => "page[name]"
      assert_select "input#page_content", :name => "page[content]"
    end
  end
end
