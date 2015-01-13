# ruby - Include jekyll / liquid template data in a YAML variable? - Stack Overflow
# http://stackoverflow.com/questions/14487110/include-jekyll-liquid-template-data-in-a-yaml-variable#answer-17046748
module Jekyll
  module LiquifyFilter
    def liquify(input)
      Liquid::Template.parse(input).render(@context)
    end
  end
end

Liquid::Template.register_filter(Jekyll::LiquifyFilter)

