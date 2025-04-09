module Jekyll
  module RegexFilter
    def decipherment(input)
    
      input = input.gsub! '<h2', 'SPLITIT<h2'
      html = "<div id='annotations'>"
      arr = input.split(/SPLITIT/)
    
      arr.each_with_index do |item, index|
        if index > 0
          html += "<div class='annotation'>#{item}</div>"
        end
      end
      
      html += "</div>"

      # This will be returned
      html
    end
  end
end

Liquid::Template.register_filter(Jekyll::RegexFilter)
