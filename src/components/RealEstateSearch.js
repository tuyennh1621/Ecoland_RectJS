import React from "react";
import PropertyTypeFilter from "../components/PropertyTypeFilter";

function RealEstateSearch() {
  return (
    <div className="container my-4">
      {/* Tabs */}
      <ul className="nav nav-tabs" id="searchTabs" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="sale-tab"
            data-bs-toggle="tab"
            data-bs-target="#sale"
            type="button"
            role="tab"
            aria-controls="sale"
            aria-selected="true"
          >
            Nhà đất bán
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="rent-tab"
            data-bs-toggle="tab"
            data-bs-target="#rent"
            type="button"
            role="tab"
            aria-controls="rent"
            aria-selected="false"
          >
            Nhà đất cho thuê
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="project-tab"
            data-bs-toggle="tab"
            data-bs-target="#project"
            type="button"
            role="tab"
            aria-controls="project"
            aria-selected="false"
          >
            Dự án
          </button>
        </li>
      </ul>

      {/* Tab contents */}
      <div className="tab-content" id="searchTabsContent">
        {/* Nhà đất bán */}
        <div
          className="tab-pane fade show active"
          id="sale"
          role="tabpanel"
          aria-labelledby="sale-tab"
        >
          <input
            type="text"
            className="form-control mb-3 fcus"
            placeholder="Nhà đất bán Quận Thanh Xuân"
          />
          <div className="row g-3">
            <div className="col-md-3">
              <PropertyTypeFilter />
            </div>
            <div className="col-md-3">
              <select className="form-select">
                <option>Vị trí</option>
                <option>Thanh Xuân Bắc</option>
                <option>Thanh Xuân Nam</option>
              </select>
            </div>
            <div className="col-md-3">
              <select className="form-select">
                <option>Mức giá</option>
                <option>Dưới 2 tỷ</option>
                <option>2 - 5 tỷ</option>
                <option>Trên 5 tỷ</option>
              </select>
            </div>
            <div className="col-md-3">
              <select className="form-select">
                <option>Diện tích</option>
                <option>Dưới 50m²</option>
                <option>50 - 100m²</option>
                <option>Trên 100m²</option>
              </select>
            </div>
          </div>

          {/* Toggle + Search */}
          <div className="d-flex justify-content-between align-items-center mt-4">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="investmentSwitch"
              />
              <label className="form-check-label" htmlFor="investmentSwitch">
                Phù hợp đầu tư
              </label>
            </div>
            <button className="btn btn-danger px-4">Tìm kiếm</button>
          </div>
        </div>

        {/* Nhà đất cho thuê */}
        <div
          className="tab-pane fade"
          id="rent"
          role="tabpanel"
          aria-labelledby="rent-tab"
        >
          <h5 className="mb-3">Nhà đất cho thuê Quận Thanh Xuân</h5>
          {/* ... bộ lọc riêng cho thuê ... */}
          <button className="btn btn-danger mt-3">Tìm kiếm</button>
        </div>

        {/* Dự án */}
        <div
          className="tab-pane fade"
          id="project"
          role="tabpanel"
          aria-labelledby="project-tab"
        >
          <h5 className="mb-3">Các dự án tại Thanh Xuân</h5>
          {/* ... bộ lọc riêng cho dự án ... */}
          <button className="btn btn-danger mt-3">Tìm kiếm</button>
        </div>
      </div>
    </div>
  );
}

export default RealEstateSearch;
