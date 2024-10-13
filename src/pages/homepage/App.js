import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MotelCard from "../../components/motelcard";
import { fetchMotels } from "../../services/api";
import "./App.css";

const App = () => {
  const [motels, setMotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMotels = async () => {
      try {
        setLoading(true);
        const data = await fetchMotels();
        setMotels(data);
      } catch (error) {
        setError("Error fetching data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getMotels();
  }, []);

  if (loading) {
    return <h3 className="text-center m-3">Đang tải phòng trọ...</h3>;
  }
  if (error) {
    console.log(error);

    return <h3 className="text-center m-3">Đã có lỗi xảy ra 😢</h3>;
  }

  return (
    <section className="section">
      <div className="container-fluid">
        <div className="row">
          <h3 className="m-3 text-center">DANH SÁCH PHÒNG TRỌ</h3>
          <div className="col-xs-12 col-sm-4 col-md-3">
            {motels.length > 0 ? (
              motels.map((motel, index) => (
                <div key={index} className="mb-4">
                  <MotelCard data={motel} />
                </div>
              ))
            ) : (
              <h4 className="text-red">Không có phòng trọ nào được đăng!</h4>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
