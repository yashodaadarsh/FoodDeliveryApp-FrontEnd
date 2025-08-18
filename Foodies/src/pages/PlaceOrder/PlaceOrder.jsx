import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { foodList, quantities, setQuantities } = useContext(StoreContext);
  // CartItems
  const cartItems = foodList.filter((food) => quantities[food.id] > 0);

  // Calculating total
  const subtotal = cartItems.reduce(
    (acc, food) => acc + food.price * quantities[food.id],
    0
  );
  const shipping = subtotal === 0 ? 0.0 : 10;
  const tax = subtotal * 0.1; // 10%
  const total = subtotal + shipping + tax;

  return (
    <div className="container py-5">
      {/* Main Layout */}
      <main>
        <div className="text-center">
          <img
            className="d-block mx-auto mb-2"
            src={assets.logo}
            alt=""
            width="98"
            height="98"
          />
        </div>
        <div className="row g-5">
          {/* Cart Section */}
          <div className="col-md-5 col-lg-4 order-md-last">
            <div className="card shadow-lg border-0 rounded-4 p-3">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="fw-bold text-primary">🛒 Your Cart</span>
                <span className="badge bg-primary rounded-pill shadow-sm">
                  {cartItems.length}
                </span>
              </h4>

              <ul className="list-group mb-3">
                {cartItems.map((item) => (
                  <React.Fragment key={item.id}>
                    <li className="list-group-item d-flex justify-content-between lh-sm border-0">
                      <div>
                        <h6 className="my-0 fw-semibold">{item.name}</h6>
                        <small className="text-muted">
                          Qty : {quantities[item.id]}
                        </small>
                      </div>
                      <span className="text-dark fw-semibold">
                        &#8377;{item.price * quantities[item.id]}
                      </span>
                    </li>
                    <hr className="my-2" />
                  </React.Fragment>
                ))}

                <li className="list-group-item d-flex justify-content-between border-0">
                  <div>
                    <span className="fw-bold">Shipping</span>
                  </div>
                  <span className="text-dark fw-semibold">
                    &#8377;{subtotal === 0 ? 0.0 : shipping.toFixed(2)}
                  </span>
                </li>
                <hr className="my-2" />

                <li className="list-group-item d-flex justify-content-between lh-sm border-0">
                  <div>
                    <span className="fw-bold">Tax (10%) </span>
                  </div>
                  <span className="text-dark fw-semibold">
                    &#8377;{tax.toFixed(2)}
                  </span>
                </li>
                <hr className="my-2" />

                <li className="list-group-item d-flex justify-content-between border-0">
                  <span className="fw-bold">Total (INR)</span>
                  <strong className="fs-5 text-primary">
                    &#8377;{total.toFixed(2)}
                  </strong>
                </li>
              </ul>
            </div>
          </div>

          {/* Billing Form */}
          <div className="col-md-7 col-lg-8">
            <div className="card shadow-lg border-0 rounded-4 p-4">
              <h4 className="mb-3 fw-bold text-dark">Billing Address</h4>
              <form className="needs-validation">
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label
                      htmlFor="firstName"
                      className="form-label fw-semibold"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      className="form-control shadow-sm"
                      id="firstName"
                      placeholder="John"
                      required
                    />
                  </div>

                  <div className="col-sm-6">
                    <label
                      htmlFor="lastName"
                      className="form-label fw-semibold"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      className="form-control shadow-sm"
                      id="lastName"
                      placeholder="Doe"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="email" className="form-label fw-semibold">
                      Email
                    </label>
                    <div className="input-group shadow-sm">
                      <span className="input-group-text">@</span>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="phone" className="form-label fw-semibold">
                      Phone Number
                    </label>
                    <div className="input-group shadow-sm">
                      <input
                        type="phone"
                        className="form-control"
                        id="phone"
                        placeholder="9876543210"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="address" className="form-label fw-semibold">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control shadow-sm"
                      id="address"
                      placeholder="1234 Main St"
                      required
                    />
                  </div>

                  <div className="col-md-5">
                    <label htmlFor="country" className="form-label fw-semibold">
                      Country
                    </label>
                    <select
                      className="form-select shadow-sm"
                      id="country"
                      required
                    >
                      <option value="">Choose...</option>
                      <option>India</option>
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="state" className="form-label fw-semibold">
                      State
                    </label>
                    <select
                      className="form-select shadow-sm"
                      id="state"
                      required
                    >
                      <option value="">Choose...</option>
                      <option>Telangana</option>
                    </select>
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="zip" className="form-label fw-semibold">
                      Zip
                    </label>
                    <input
                      type="number"
                      className="form-control shadow-sm"
                      id="zip"
                      placeholder="505465"
                      required
                    />
                  </div>
                </div>

                <hr className="my-4" />

                <button
                  className="w-100 btn btn-lg btn-primary shadow-sm fw-bold"
                  type="submit"
                  disabled={cartItems.length === 0}
                >
                  Continue to Checkout
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PlaceOrder;
