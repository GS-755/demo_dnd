import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { GUI_MODE_MEDIUM, GUI_MODE_SMALL } from "../../utils/constants";

const MotelCard = ({ data, guiMode }) => {
  const imageUrl = process.env.REACT_APP_IMG_URL + "/getmotelimage?motelid=";

  switch (guiMode) {
    case GUI_MODE_SMALL:
      return (
        <div className="col-xs-4 col-sm-3 col-2 col-md-2 col-lg-1">
          <div className="card mb-3">
            <img
              src={imageUrl + data.MaPT}
              className="card-img-top p-4 object-fit-cover"
              alt={data.TieuDe}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title font-weight-bold">{data.TieuDe}</h5>
              <p className="card-text">Diện tích: {data.DienTich} m²</p>
              <p className="card-text">
                <strong className="text-danger">
                  Giá: {data.SoTien.toLocaleString()} VND
                </strong>
              </p>
              <p className="card-text">
                <strong className="text-success">
                  Tiền cọc: {data.TienCoc.toLocaleString()} VND
                </strong>
              </p>
            </div>
          </div>
        </div>
      );
    case GUI_MODE_MEDIUM:
      return (
        <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
          <div className="card mb-3">
            <img
              src={imageUrl + data.MaPT}
              className="card-img-top p-4"
              alt={data.TieuDe}
            />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">{data.TieuDe}</h5>
              <p className="card-text">Diện tích: {data.DienTich} m²</p>
              <p className="card-text">
                <strong className="text-danger">
                  Giá: {data.SoTien.toLocaleString()} VND
                </strong>
              </p>
              <p className="card-text">
                <strong className="text-success">
                  Tiền cọc: {data.TienCoc.toLocaleString()} VND
                </strong>
              </p>
            </div>
          </div>
        </div>
      );
    default: // case GUI_MODE_LARGE:
      return (
        <div className="card h-100">
          <img
            src={imageUrl + data.MaPT}
            className="card-img-top p-4 object-fit-cover"
            alt={data.TieuDe} 
            height={220}
          />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{data.TieuDe}</h5>
            <p className="card-text">Diện tích: {data.DienTich} m²</p>
            <p className="card-text">
              <strong className="text-danger">
                Giá: {data.SoTien.toLocaleString()} VND
              </strong>
            </p>
            <p className="card-text">
              <strong className="text-success">
                Tiền cọc: {data.TienCoc.toLocaleString()} VND
              </strong>
            </p>
          </div>
        </div>
      );
  }
};

export default MotelCard;
