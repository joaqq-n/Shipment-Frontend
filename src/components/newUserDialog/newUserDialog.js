import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField } from "@material-ui/core";
// core components
import DialogCustom from "components/Dialog/Dialog";

const styles = {
  line: {},
  formControl: {
    width: "100%",
  },
  checkboxArea: {
    display: "flex",
    alignItems: "center",
    justfiyContent: "center",
  },
  sumSeccion: {
    display: "flex",
    justfiyContent: "center",
    alignItems: "center",
    padding: "2px",
    marginTop: "25px",
    borderRadius: "4px",
    border: "1px solid #000000",
  },
};

const useStyles = makeStyles(styles);

export default function Modal({
  open,
  handleClose,
  createUser,
  data,
  handleChange,
}) {
  const classes = useStyles();

  return (
    <>
      <DialogCustom
        open={open}
        handleClose={handleClose}
        title="Crear nueva cuenta"
        maxWidth={true}
        onSubmit={createUser}
        content={
          <>
            <Grid container className={classes.line} spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Nombre"
                  variant="outlined"
                  name="nombre"
                  value={data.nombre}
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Apellido"
                  variant="outlined"
                  name="apellido"
                  value={data.apellido}
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Tipo"
                  variant="outlined"
                  name="tipo"
                  value={data.tipo}
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  label="Rut"
                  variant="outlined"
                  name="rut"
                  value={data.rut}
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>
              <Grid item xs={1}>
                <TextField
                  label="DV"
                  variant="outlined"
                  name="dv"
                  value={data.dv}
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  label="Correo"
                  variant="outlined"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  label="Cargo"
                  variant="outlined"
                  name="cargo"
                  value={data.cargo}
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Asesor"
                  variant="outlined"
                  name="asesor"
                  value={data.asesor}
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Teléfono"
                  variant="outlined"
                  name="telefono"
                  value={data.telefono}
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>

              <Grid item xs={5}>
                <TextField
                  label="Contraseña"
                  variant="outlined"
                  type="password"
                  name="pass"
                  value={data.pass}
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>
            </Grid>
          </>
        }
      />
    </>
  );
}
