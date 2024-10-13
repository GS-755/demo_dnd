import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MotelCard = ({ data }) => {
  const imageUrl = process.env.REACT_APP_IMG_URL + '/getmotelimage?motelid=';

  return (
    <div className="card mb-3">
      <img src={imageUrl + data.MaPT} className="card-img-top p-4" alt={data.TieuDe} />
      <div className="card-body">
        <h5 className="card-title font-weight-bold">{data.TieuDe}</h5>
        <p className="card-text">Diện tích: {data.DienTich} m²</p>
        <p className="card-text">
          <strong className="text-danger">Giá: {data.SoTien.toLocaleString()} VND</strong>
        </p>
        <p className="card-text">
          <strong className="text-success">Tiền cọc: {data.TienCoc.toLocaleString()} VND</strong>
        </p>
      </div>
    </div>
  );
};

export default MotelCard; 
