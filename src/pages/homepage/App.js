import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MotelCard from "../../components/motelcard";
import { fetchMotels } from "../../services/api";
import "./App.css";
import DropDown from "../../components/dropdown";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const App = () => {
  /* Cards size mode state Start */
  // Card size data
  const cardSizes = [
    {
      label: "Lớn",
      value: 2,
    },
    {
      label: "Trung bình",
      value: 1,
    },
    {
      label: "Nhỏ",
      value: 0,
    },
  ];

  const [guiMode, setGuiMode] = useState(cardSizes[0].value);
  useEffect(() => {}, []);
  const handleGuiModeSelect = (newGuiMode) => {
    setGuiMode(newGuiMode);
  };
  /* Cards size mode state End */

  /* Motels state start */
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
        setError("Error fetching data! Please try again later 😢");
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
  /* Motels state end */
  /* Grid provider start */
  const generateLayout = (motels) => {
    return motels.map((_, index) => ({
      i: index.toString(),
      x: (index % 4) * 3,
      y: Math.floor(index / 4) * 4,
      w: 3,
      h: 4,
      minW: 3,
      maxW: 12,
    }));
  };

  const layouts = {
    lg: generateLayout(motels),
    md: generateLayout(motels),
    sm: generateLayout(motels),
    xs: generateLayout(motels),
  };
  /* Grid provider end */

  return (
    <section className="section">
      <h3 className="m-3 text-center">DANH SÁCH PHÒNG TRỌ</h3>
      <div className="row px-2 py-2 m-3" style={{ background: "#EBEBEB" }}>
        <div className="col-6 text-start">
          <div className="d-flex flex-row align-items-center">
            <p className="pr-3 m-0" style={{ width: "5rem" }}>
              Kích cỡ
            </p>
            <DropDown
              data={cardSizes}
              styles={{ width: "7rem" }}
              action={(newGuiMode) => {
                handleGuiModeSelect(newGuiMode);
                console.log(newGuiMode);
              }}
            />
          </div>
        </div>
        <div className="col-6 text-end">
          <button className="btn btn-primary pl-3 pr-3">Chỉnh sửa</button>
        </div>
      </div>
      <div className="container-fluid">
        <ResponsiveGridLayout
          className="layout"
          layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480 }}
          cols={{ lg: 12, md: 9, sm: 6, xs: 3 }}
          rowHeight={100}
          isResizable={false}
          compactType="horizontal"
          preventCollision={false}
          onLayoutChange={(layout, layouts) => {
            // You can save the new layout here if needed
          }}
        >
          {motels.length > 0 ? (
            motels.map((motel, index) => (
              <div key={index} className="mb-4">
                <MotelCard data={motel} guiMode={guiMode} />
              </div>
            ))
          ) : (
            <h4 className="text-red m-3">Không có phòng trọ nào được đăng!</h4>
          )}
        </ResponsiveGridLayout>
      </div>
    </section>
  );
};

export default App;
