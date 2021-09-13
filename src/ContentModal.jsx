import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ContentModal({
        children,
        id, 
        cardPoster,
        title,
        date,
        instImg,
        instName,
        insDesc,
        img,
        Edesc,
        Elink,
        Registration,


}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div type="button" onClick={handleOpen}>
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
           <div className="">
           <div className="lg:flex">
             <div className="bg-gray-200 grid place-items-center p-10">
              <h1 className="text-2xl py-5">Know your Instructor</h1>
              <div className="">
              <img src={instImg} alt="" className="h-20 w-20 rounded-full"/>
              </div>
              <h2 className="text-xl">{instName}</h2>
              <div className="text-justify">
              <p className="font-sans p-5">{insDesc}</p>
              </div>
             </div>
             <div className=" p-10 text-justify ">

               <h1 className="uppercase text-5xl text-center tracking-widest ">{title}</h1>
               <div className="py-5 md:py-10 lg:py-10">
               <p className="text-sm font-sans md:text-lg lg:text-lg ">{Edesc}</p>
               </div>

               <a href={Elink} className="bg-red-500 p-2 text-white rounded hover:bg-red-700">{Registration}</a>
               
             </div>
           </div>
          </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
