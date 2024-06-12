/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const books = [
  {
    id: 1,
    product_name: "To Kill a Mockingbird",
    description:
      "Harper Lee's Pulitzer Prize-winning masterwork of honor and injustice in the deep South.",
    price: 14.99,
    photo_link:
      "https://pathakshamabesh.com/wp-content/uploads/2022/02/4084a0711c388099e55c08e2c0f28a25.jpg",
  },
  {
    id: 2,
    product_name: "1984",
    description:
      "George Orwell's dystopian novel set in a totalitarian society under constant surveillance.",
    price: 9.99,
    photo_link: "https://images.penguinrandomhouse.com/cover/9780451524935",
  },
  {
    id: 3,
    product_name: "The Great Gatsby",
    description:
      "F. Scott Fitzgerald's classic novel of the Jazz Age, a tale of decadence and excess.",
    price: 10.99,
    photo_link: "https://images.penguinrandomhouse.com/cover/9780743273565",
  },
  {
    id: 4,
    product_name: "Pride and Prejudice",
    description:
      "Jane Austen's beloved tale of love and societal expectations in 19th-century England.",
    price: 8.99,
    photo_link: "https://images.penguinrandomhouse.com/cover/9780141439518",
  },
  {
    id: 5,
    product_name: "The Catcher in the Rye",
    description:
      "J.D. Salinger's iconic novel about teenage angst and alienation.",
    price: 10.99,
    photo_link: "https://images.penguinrandomhouse.com/cover/9780316769488",
  },
  {
    id: 6,
    product_name: "The Hobbit",
    description:
      "J.R.R. Tolkien's fantasy adventure that precedes the epic Lord of the Rings trilogy.",
    price: 12.99,
    photo_link: "https://images.penguinrandomhouse.com/cover/9780345339683",
  },
  {
    id: 7,
    product_name: "Moby Dick",
    description:
      "Herman Melville's classic tale of obsession and revenge on the high seas.",
    price: 11.99,
    photo_link: "https://images.penguinrandomhouse.com/cover/9780142437247",
  },
  {
    id: 8,
    product_name: "War and Peace",
    description:
      "Leo Tolstoy's epic novel of Russian society during the Napoleonic Wars.",
    price: 19.99,
    photo_link: "https://images.penguinrandomhouse.com/cover/9781400079988",
  },
  {
    id: 9,
    product_name: "The Alchemist",
    description:
      "Paulo Coelho's enchanting story of a shepherd's journey to discover his personal legend.",
    price: 13.99,
    photo_link: "https://images.penguinrandomhouse.com/cover/9780062315007",
  },
  {
    id: 10,
    product_name: "Catch-22",
    description:
      "Joseph Heller's satirical novel about the absurdities of war.",
    price: 12.99,
    photo_link:
      "https://books.google.com.bd/books/content?id=U9V8JYt7WwoC&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U28v9sqYJFBUdpfQic9ps7uEsDifg&w=1280",
  },
  {
    id: 11,
    product_name: "Brave New World",
    description:
      "Aldous Huxley's prophetic novel of a future society driven by technology and conformity.",
    price: 10.99,
    photo_link:
      "https://upload.wikimedia.org/wikipedia/en/6/62/BraveNewWorld_FirstEdition.jpg",
  },
  {
    id: 12,
    product_name: "The Road",
    description:
      "Cormac McCarthy's haunting post-apocalyptic novel of a father and son's journey for survival.",
    price: 11.99,
    photo_link:
      "https://upload.wikimedia.org/wikipedia/commons/2/27/The-road.jpg",
  },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-navy-800  container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
        E-Book Shop
      </h2>
      <Slider {...settings}>
        {books.map((book) => (
          <div key={book.id} className="px-4">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src={book.photo_link}
                alt={book.product_name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                {book.product_name}
              </h3>
              <p className="text-gray-700 mb-2">{book.description}</p>
              <p className="text-gray-900 font-bold">
                ${book.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
