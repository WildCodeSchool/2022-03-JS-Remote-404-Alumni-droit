import React, { useState } from "react";
import { Switch } from "@headlessui/react";

// ICONE POUBELLE
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

// MODAL DIALOG
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";

function AdminToggle() {
  const [isValid, setIsValid] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex justify-between flex-col contents-center pt-3">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center">
          <Switch
            checked={isValid}
            onChange={setIsValid}
            className={`${isValid ? "bg-green-500" : "bg-slate-400"}
                relative inline-flex h-[1.3rem] w-[2.3rem] mr-1 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span
              aria-hidden="true"
              className={`${isValid ? "translate-x-4" : "translate-x-0"}
                    pointer-events-none inline-block h-[1rem] w-[1rem] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
          {isValid === true ? (
            <p className="text-green-500 font-bold text-[.7rem]">Validé</p>
          ) : (
            <p className="text-slate-400 font-bold text-[.7rem]">En attente</p>
          )}
        </div>

        {/* ICONE POUBELLE */}

        <div>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            onClick={handleClickOpen}
          >
            <IconButton aria-label="delete" size="small">
              <DeleteIcon className="text-black" />
            </IconButton>
          </Stack>

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className="w-500"
          >
            <h3 className="mt-5 ml-6 font-bold text-2xl text-gray-700">
              Voulez-vous vraiment supprimer ce compte ?
            </h3>
            <p className="m-6 text-base text-gray-500 leading-snug">
              Attention, cette action est irréverssible. En cas de doute, nous
              vous conseillons de cliquez sur annuler.
            </p>
            <DialogActions>
              <div>
                <Button onClick={handleClose} className="text-slate-500">
                  <span className="text-gray-600">Annuler</span>
                </Button>
              </div>
              <div>
                <Button onClick={handleClose} autoFocus>
                  <span className="text-red-800 font-bold">
                    Je supprime ce compte
                  </span>
                </Button>
              </div>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default AdminToggle;
