import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { countries } from "../data/countries";

export default function CountrySelect({ setCountryCode }) {
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 200 }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      onChange={(event, newValue) => {
        if (newValue) {
          setCountryCode(newValue.phone);
        } else {
          setCountryCode("");
        }
      }}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <Box
            key={key}
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...optionProps}
          >
            <img
              loading="lazy"
              width="20"
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              alt=""
            />
            {option.label} ({option.code}) +{option.phone}
          </Box>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          slotProps={{
            htmlInput: {
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            },
          }}
        />
      )}
    />
  );
}
