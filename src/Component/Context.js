import React, { createContext, useState } from "react";

export const contextData = createContext(); //api // context value

export const Context = (props) => {
  //data
  const [data, setData] = useState([
    {
      id: "1",
      claps: "500",
      title: "Title View of the Gallery",
      category: "Travel",
      date: "August 21 2017",
      author: "Rahul Rattan",
      image: "https://www.gstatic.com/webp/gallery/1.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
    },
    {
      id: "2",
      claps: "500",
      title: "The Sound cloud You loved is doomed",
      category: "Travel",
      date: "August 21 2017",
      author: "Rahul Rattan",
      image: "https://www.gstatic.com/webp/gallery/1.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
    },
    {
      id: "3",
      claps: "500",
      title: "The Sound cloud You loved is doomed",
      category: "Travel",
      date: "August 21 2017",
      author: "Nikari Sharma",
      image: "https://www.gstatic.com/webp/gallery/1.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
    },
    {
      id: "4",
      claps: "500",
      title: "Joshua Tree Overnight Adventure",
      category: "Travel",
      date: "August 21 2017",
      author: "Nikari Sharma",
      image:
        "https://i.insider.com/5ecfe8683ad86118977c07c3?width=600&format=jpeg&auto=webp",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
    },
    {
      id: "5",
      claps: "500",
      title: "Joshua Tree Overnight Adventure",
      category: "Travel",
      date: "August 21 2017",
      author: "Nikari Sharma",
      image:
        "https://www.treehugger.com/thmb/QolJfOYFmxwIH6Sxv5SBqY8Kq-M=/1885x1414/smart/filters:no_upscale()/GettyImages-1273584292-cbcd5f85f4c646d58f7a7fa158dcaaeb.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
    },
    {
      id: "6",
      claps: "500",
      title: "Joshua Tree Overnight Adventure",
      category: "Travel",
      date: "August 21 2017",
      author: "Nikari Sharma",
      image:
        "https://static.toiimg.com/thumb/msid-79510927,width-900,height-1200,resizemode-6.cms",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
    },
    {
      id: "7",
      claps: "500",
      title: "Joshua Tree Overnight Adventure",
      category: "Travel",
      date: "August 21 2017",
      author: "Nikari Sharma",
      image:
        "https://image.shutterstock.com/image-photo/forest-road-on-cloudy-day-260nw-1960786579.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
    },
    {
      id: "8",
      claps: "500",
      title: "Title View of the Gallery",
      category: "Travel",
      date: "August 21 2017",
      author: "Rahul Rattan",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDs7t68P1t9wNALdy805hfMr1U1-Mz6dJnMg&usqp=CAU",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
    },
    {
      id: "9",
      claps: "500",
      title: "Title Bollywood",
      category: "Bollywood",
      date: "August 21 2017",
      author: "Rahul Rattan",
      image:
        "https://image.shutterstock.com/image-vector/bollywood-word-on-gradient-background-260nw-1443999785.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
    },
    {
      id: "10",
      claps: "500",
      title: "Title Bollywood",
      category: "Bollywood",
      date: "August 21 2017",
      author: "Rahul Rattan",
      image:
        "https://image.shutterstock.com/image-vector/bollywood-word-on-gradient-background-260nw-1443999785.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
    },
    {
      id: "11",
      claps: "500",
      title: "Title Bollywood",
      category: "Bollywood",
      date: "August 21 2017",
      author: "Rahul Rattan",
      image:
        "https://image.shutterstock.com/image-vector/bollywood-word-on-gradient-background-260nw-1443999785.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
    },
    {
      id: "12",
      claps: "500",
      title: "Title Bollywood",
      category: "Bollywood",
      date: "August 21 2017",
      author: "Ritika Hedge",
      image:
        "https://image.shutterstock.com/image-vector/bollywood-word-on-gradient-background-260nw-1443999785.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
    },
    {
      id: "13",
      claps: "500",
      title: "Title Bollywood",
      category: "Bollywood",
      date: "August 21 2017",
      author: "Ritika Hedge",
      image:
        "https://image.shutterstock.com/image-vector/bollywood-word-on-gradient-background-260nw-1443999785.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
    },
    {
      id: "14",
      claps: "500",
      title: "Title Hollywood",
      category: "Hollywood",
      date: "August 21 2017",
      author: "Ritika Hedge",
      image:
        "https://media.newyorker.com/photos/5d3c802a35c964000896ae60/1:1/w_1706,h_1706,c_limit/Brody-TarantinoHollywood.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
    },
    {
      id: "15",
      claps: "500",
      title: "Title Hollywood",
      category: "Hollywood",
      date: "August 21 2017",
      author: "Ritika Hedge",
      image:
        "https://media.newyorker.com/photos/5d3c802a35c964000896ae60/1:1/w_1706,h_1706,c_limit/Brody-TarantinoHollywood.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
    },
    {
      id: "16",
      claps: "500",
      title: "Title Hollywood",
      category: "Hollywood",
      date: "August 21 2017",
      author: "Ritika Hedge",
      image:
        "https://media.newyorker.com/photos/5d3c802a35c964000896ae60/1:1/w_1706,h_1706,c_limit/Brody-TarantinoHollywood.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
    },
    {
      id: "17",
      claps: "500",
      title: "Title Hollywood",
      category: "Hollywood",
      date: "August 21 2017",
      author: "Ritika Hedge",
      image:
        "https://images.unsplash.com/photo-1594663805807-29a7cc1847c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9sbHl3b29kfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
    },
    {
      id: "18",
      claps: "500",
      title: "Title Hollywood",
      category: "Hollywood",
      date: "August 21 2017",
      author: "Gagan Singh",
      image:
        "https://images.unsplash.com/photo-1594663805807-29a7cc1847c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9sbHl3b29kfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
    },
    {
      id: "19",
      claps: "500",
      title: "Title Hollywood",
      category: "Hollywood",
      date: "August 21 2017",
      author: "Gagan Singh",
      image:
        "https://images.unsplash.com/photo-1594663805807-29a7cc1847c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9sbHl3b29kfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
    },
    {
      id: "20",
      claps: "500",
      title: "Title Hollywood",
      category: "Hollywood",
      date: "August 21 2017",
      author: "Gagan Singh",
      image:
        "https://images.unsplash.com/photo-1594663805807-29a7cc1847c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9sbHl3b29kfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
    },
    {
      id: "21",
      claps: "500",
      title: "Title Technoloogy",
      category: "Technology",
      date: "August 21 2017",
      author: "Gagan Singh",
      image:
        "https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
    },
    {
      id: "22",
      claps: "500",
      title: "Title Technoloogy",
      category: "Technology",
      date: "August 21 2017",
      author: "Gagan Singh",
      image:
        "https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
    },
    {
      id: "23",
      claps: "500",
      title: "Title Technoloogy",
      category: "Technology",
      date: "August 21 2017",
      author: "Gagan Singh",
      image:
        "https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
    },
    {
      id: "24",
      claps: "500",
      title: "Title Technoloogy",
      category: "Technology",
      date: "August 21 2017",
      author: "Gagan Singh",
      image:
        "https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
    },
    {
      id: "25",
      claps: "500",
      title: "Title Fitness",
      category: "Fitness",
      date: "August 21 2017",
      author: "Gagan Singh",
      image:
        "https://rukminim1.flixcart.com/image/416/416/k3ncakw0/sticker/y/6/m/gym-fitness-bodybuilding-sport-workout-creative-colorful-word-original-imafmqmqqgz2bymz.jpeg?q=70",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
    },
    {
      id: "26",
      claps: "500",
      title: "Title Fitness",
      category: "Fitness",
      date: "August 21 2017",
      author: "Gagan Singh",
      image:
        "https://rukminim1.flixcart.com/image/416/416/k3ncakw0/sticker/y/6/m/gym-fitness-bodybuilding-sport-workout-creative-colorful-word-original-imafmqmqqgz2bymz.jpeg?q=70",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
    },
    {
      id: "27",
      claps: "500",
      title: "Title Fitness",
      category: "Fitness",
      date: "August 21 2017",
      author: "Manish Agarwal",
      image:
        "https://rukminim1.flixcart.com/image/416/416/k3ncakw0/sticker/y/6/m/gym-fitness-bodybuilding-sport-workout-creative-colorful-word-original-imafmqmqqgz2bymz.jpeg?q=70",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
    },
    {
      id: "28",
      claps: "500",
      title: "Title Fitness",
      category: "Fitness",
      date: "August 21 2017",
      author: "Manish Agarwal",
      image:
        "https://rukminim1.flixcart.com/image/416/416/k3ncakw0/sticker/y/6/m/gym-fitness-bodybuilding-sport-workout-creative-colorful-word-original-imafmqmqqgz2bymz.jpeg?q=70",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
    },
    {
      id: "29",
      claps: "500",
      title: "Title Food",
      category: "Food",
      date: "August 21 2017",
      author: "Manish Agarwal",
      image:
        "https://media.istockphoto.com/photos/varied-food-carbohydrates-protein-vegetables-fruits-dairy-legumes-on-picture-id1218254547?b=1&k=20&m=1218254547&s=170667a&w=0&h=mOEC7x7qU5NC78mCULs-jAPeLkxy8opOvIbGSnwmAyw=",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
    },
    {
      id: "30",
      claps: "500",
      title: "Title Food",
      category: "Food",
      date: "August 21 2017",
      author: "Manish Agarwal",
      image:
        "https://www.adorama.com/alc/wp-content/uploads/2018/02/BBBURGER8-1024x683-1024x683.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
    },
    {
      id: "31",
      claps: "500",
      title: "Title Food",
      category: "Food",
      date: "August 21 2017",
      author: "Manish Agarwal",
      image:
        "https://media.istockphoto.com/photos/varied-food-carbohydrates-protein-vegetables-fruits-dairy-legumes-on-picture-id1218254547?b=1&k=20&m=1218254547&s=170667a&w=0&h=mOEC7x7qU5NC78mCULs-jAPeLkxy8opOvIbGSnwmAyw=",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
    },
    {
      id: "32",
      claps: "500",
      title: "Title Food",
      category: "Food",
      date: "August 21 2017",
      author: "Manish Agarwal",
      image:
        "https://www.adorama.com/alc/wp-content/uploads/2018/02/BBBURGER8-1024x683-1024x683.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
    },
    {
      id: "33",
      claps: "500",
      title: "Title Food",
      category: "Food",
      date: "August 21 2017",
      author: "Manish Agarwal",
      image:
        "https://media.istockphoto.com/photos/varied-food-carbohydrates-protein-vegetables-fruits-dairy-legumes-on-picture-id1218254547?b=1&k=20&m=1218254547&s=170667a&w=0&h=mOEC7x7qU5NC78mCULs-jAPeLkxy8opOvIbGSnwmAyw=",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
    },
    {
      id: "34",
      claps: "500",
      title: "Title Food",
      category: "Food",
      date: "August 21 2017",
      author: "Manish Agarwal",
      image:
        "https://www.adorama.com/alc/wp-content/uploads/2018/02/BBBURGER8-1024x683-1024x683.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
    },
    {
      id: "35",
      claps: "500",
      title: "Travel Latest Destination",
      category: "Travel",
      date: "August 21 2017",
      author: "Manish Agarwal",
      image:
        "https://images.unsplash.com/photo-1508682641856-78948a748357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FzdGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
    },
  ]);
  return (
    <contextData.Provider value={[data, setData]}>
      {props.children}
    </contextData.Provider>
  );
};
