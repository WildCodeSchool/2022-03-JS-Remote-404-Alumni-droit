import React, { useState, useEffect } from "react";
import axios from "axios";

import { TextField, Autocomplete } from "@mui/material";
import { HiPlus, HiMinus } from "react-icons/hi";

function MasterFilter() {
  const [masterData, setMasterData] = useState([]);
  const [promotionData, setPromotionData] = useState([]);
  const [masterInput, setMasterInput] = useState([true, false, false]);

  const handleMasterInput = (index, type) => {
    const provMasterInput = [...masterInput];
    if (index < 2 && type === "plus") {
      provMasterInput[index + 1] = true;
    } else if (index > 0 && type === "minus") {
      provMasterInput[index] = false;
    }
    setMasterInput(provMasterInput);
  };

  const getPromotion = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/promotion`)
      .then((res) => {
        const years = res.data.map((el) => ({
          year: el.year.toString(),
          id: el.year,
        }));
        setPromotionData(years);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getMaster = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/master`)
      .then((res) => {
        setMasterData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getPromotion();
    getMaster();
  }, []);

  return (
    <div className="flex flex-col">
      <p className="lg:text-sm text-center mb-3">Votre cursus annexe :</p>
      {masterInput.map((masterIn, index) => {
        if (masterIn) {
          return (
            <div className="flex flex-wrap justify-between mb-5">
              <Autocomplete
                disablePortal
                id="combo-box-4"
                options={masterData}
                getOptionLabel={(option) =>
                  option.title.replace("&apos;E", "'É")
                }
                sx={{
                  width: "55%",
                  mb: 1.5,
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={`#${index + 1} Master 2`}
                    color="primary"
                  />
                )}
              />

              <Autocomplete
                disablePortal
                id="combo-box-5"
                options={promotionData}
                getOptionLabel={(option) => option.year}
                sx={{
                  width: "30%",
                  mb: 1,
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Année" color="primary" />
                )}
              />
              <button
                type="button"
                disabled={index === 2}
                className="pb-3"
                onClick={() => handleMasterInput(index, "plus")}
              >
                <HiPlus size={20} color={index === 2 ? "#d3d3d3" : "black"} />
              </button>
              <button
                type="button"
                disabled={index === 0}
                className="pb-3"
                onClick={() => handleMasterInput(index, "minus")}
              >
                <HiMinus size={20} color={index === 0 ? "#d3d3d3" : "black"} />
              </button>
              <TextField
                label="Le Master ne figure pas dans la liste"
                size="medium"
                sx={{
                  width: "55%",
                  mb: 1.5,
                }}
              />

              <TextField
                label="Université d'obtention"
                size="medium"
                sx={{
                  width: "100%",
                }}
              />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default MasterFilter;
