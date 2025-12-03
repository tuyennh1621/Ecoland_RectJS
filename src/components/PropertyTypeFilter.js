import React, { useState } from "react";

function PropertyTypeFilter() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const types = [
    "Tất cả nhà đất",
    "Căn hộ chung cư",
    "Chung cư mini, căn hộ dịch vụ",
    "Nhà riêng",
    "Nhà biệt thự, liền kề",
    "Shophouse, nhà phố thương mại",
    "Đất nền dự án",
    "Trang trại, khu nghỉ dưỡng",
    "Kho, nhà xưởng",
  ];

  const toggleType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  return (
    <div className="position-relative">
      <button
        className="select-land"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <div className="d-flex align-items-center justify-content-between">
          {selectedTypes.length > 0
            ? `${selectedTypes.length} loại đã chọn`
            : "Loại nhà đất"}
          <i className="fa-solid fa-caret-down"></i>
        </div>
      </button>

      {showDropdown && (
        <div
          className="card p-3 position-absolute card-type shadow"
          style={{ zIndex: 10 }}
        >
          {types.map((type) => (
            <div className="form-check" key={type}>
              <input
                className="form-check-input"
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => toggleType(type)}
                id={type}
              />
              <label className="form-check-label" htmlFor={type}>
                {type}
              </label>
            </div>
          ))}

          <div className="d-flex justify-content-between mt-3">
            <button
              className="btn btn-sm btn-outline-secondary"
              onClick={() => setSelectedTypes([])}
            >
              Đặt lại
            </button>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => setShowDropdown(false)}
            >
              Áp dụng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PropertyTypeFilter;
