import React, { useState } from 'react'
import "./styles/Subscribe.scss"

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { borders } from '@material-ui/system';
export default function Subscribe() {
    const [open, setopen] = useState(false);
    const styles = theme => ({
        notchedOutline: {
            borderWidth: "1px",
            borderColor: "yellow !important"
        }
    });


    return (
        <div className="subscribeimage">

            <div className="subscribecontainer">

                <div>
                    <div className="subscribeheading">Subscribe to our Newsletter!</div>
                    <div className="subscribesubheading">Let's subscribe with us and find the fun.</div>

                </div>

                <div>
                    <button className="subscribebtn" onClick={() => setopen(true)}>Subscribe Now</button>
                    <Dialog open={open} onClose={() => setopen(false)} aria-labelledby="form-dialog-title" >
                        <DialogTitle id="form-dialog-title" >Subscribe</DialogTitle>
                        <DialogContent className="subscrible_dialog">
                            <DialogContentText className="subscrible_dialog">
                                To subscribe to this website, please enter your email address here. We will send updates
                                occasionally.
                             </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                label="Email Address"
                                type="email"
                                fullWidth
                                InputLabelProps={{
                                    style: { color: '#fff', paddingLeft: '10px' },
                                }}

                                className="dialog_input"
                                borderColor="white"
                            />
                        </DialogContent>
                        <DialogActions className="subscrible_dialog">
                            <Button onClick={() => setopen(false)} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={() => setopen(false)} color="primary">
                                Subscribe
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>


        </div>

    )
}
