import { Context } from "./MyContext";
import { useContext } from "react";

const CategoryCard = ({ setSearchQuery, productRef }) => {
    const { category } = useContext(Context);

    const handleCategoryClick = (categoryName) => {
        setSearchQuery(categoryName); // Filter products
        productRef.current?.scrollIntoView({ behavior: "smooth" }); // Scroll to products
    };

    const handleResetFilter = () => {
        setSearchQuery(""); // Show all products
        productRef.current?.scrollIntoView({ behavior: "smooth" }); // Scroll to products
    };

    return (
        <div className="container category my-5">
            <div className="title-wrapper">
                <h6 onClick={handleResetFilter} className="text-nowrap align-text-center">
                    Product Category
                </h6>
            </div>

            <div className="row my-4">
                {category.map((c) => (
                    <div key={c.id} className="col-lg-2 col-md-3 col-6 position-relative">
                        <div 
                            className="text-center card-category w-100 my-2 my-md-1"
                            onClick={() => handleCategoryClick(c.description)} // Filter by category
                            style={{ cursor: "pointer" }}
                        >
                            <img src={c.image} className="w-100" alt={c.description} />
                            <div className="category-label fw-semibold position-absolute bottom-0 w-100">
                                {c.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryCard;
