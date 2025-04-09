module Jekyll
  module RegexFilter
    def replace_regex(input, reg_str, repl_str)
    
      arr = input.split("##(.*?)")
    
      arr.each do |n|
        text = "Current number is: #{n}"
        puts text
      end
    
      re = Regexp.new reg_str

      # This will be returned
      input.gsub re, repl_str
    end
  end
end

Liquid::Template.register_filter(Jekyll::RegexFilter)
