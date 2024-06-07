import { Box, Paper, Typography } from "@mui/material";
import { Divider } from "antd";

export default function CorpDetailsHeader() {
  return (
    <>
      <Typography
        fontWeight="300"
        style={{ fontSize: 16 }}
        color="#FFF"
        backgroundColor="#074465"
        borderRadius={0.5}
        textAlign="left"
        paddingLeft={2}
        fontStyle={"bold"}
      >
        Bank Details
      </Typography>

      <Paper
        elevation={6}
        variant="elevation"
        style={{
          marginBottom: 8,
          display: "flex",
        }}
      >
        <Box
          display="flex"
          width="100%"
          padding={1}
          backgroundColor="#396984"
          color="#FFF"
          justifyContent="space-between"
          mb={1}
        >
          <Box flexBasis="20%" style={{ textAlign: "center" }}>
            <Typography variant="subtitle2">Bank Name</Typography>
          </Box>
          <Box flexBasis="20%" style={{ textAlign: "center" }}>
            <Typography variant="subtitle2">Bank IFSC</Typography>
          </Box>
          <Box flexBasis="20%" style={{ textAlign: "center" }}>
            <Typography variant="subtitle2">Bank Account No</Typography>
          </Box>
          <Box flexBasis="20%" style={{ textAlign: "center" }}>
            <Typography variant="subtitle2">Bank Mobile</Typography>
          </Box>
          <Box flexBasis="20%"></Box>
        </Box>
      </Paper>
    </>
  );
}
