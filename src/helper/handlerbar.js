const Handlebar = require('handlebars')

module.exports = {
    sum: (a, b) => a + b,
    sortable: (field, sort) => {
      const sortType = field === sort.column ? sort.type : "default";

      const icons = {
        default: "oi oi-elevator",
        desc: "oi oi-sort-descending",
        asc: "oi oi-sort-ascending"
    }    
      const types = {
        default: "desc",
        desc: "asc",
        asc: "desc"
      }
      const icon = icons[sortType];
      const type = types[sortType]; 

      const href = Handlebar.escapeExpression(`?_sort&column=${field}&type=${type}`)

      const output =  `<a href = "${href}"
        <span class="${icon}"></span>
      </a>`;
      return new Handlebar.SafeString(output)
}}