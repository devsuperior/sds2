const loadOptions = async (inputValue: string, callback: (places: Place[]) => void) => {
  const response = await fetchLocalMapBox(inputValue);

  const places = response.data.features.map((item: any) => {
    return ({
      label: item.place_name,
      value: item.place_name,
      coords: item.center
    });
  });

  callback(places);
};

const handleChangeSelect = (place: Place) => {
  setAddress(place);
  setLocation({
    lng: place.coords[0],
    lat: place.coords[1],
  });
  onChangeLocation({
    latitude: place.coords[1],
    longitude: place.coords[0],
    address: place.label
  });
};
