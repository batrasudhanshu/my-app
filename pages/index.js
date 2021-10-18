import {
  Box,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

export const getStaticProps = async () => {
  const res = await fetch("https://gorest.co.in/public-api/users");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const index = ({ data }) => {
  const [newUser, setNewUser] = useState("");
  const submitUser = async () => {
    const response = await fetch("https://gorest.co.in/public/v1/users", {
      method: "POST",
      body: JSON.stringify({ newUser }),
      headers: {
        "Content-Type": "application/json ",
      },
    });
    const data = await response.json();
    console.log("data", data);
  };

  return (
    <>
      <Container maxWidth="md">
        <h2 style={{ textAlign: "center" }}>Users</h2>

        <form>
          <input
            type="text"
            value={newUser}
            onChange={(e) => setNewUser(e.target.value)}
          />
          <button onCLick={submitUser}>Add User</button>
        </form>
        <div>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {data.data.map((user) => (
              <Grid item xs={6} style={{ background: "whitesmoke" }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} gutterBottom>
                    {user.status}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {user.name}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }}>{user.email}</Typography>
                  <Typography variant="body2">
                    {user.gender}
                    <br />
                  </Typography>
                </CardContent>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default index;
