const loadOptions = async (inputValue: string, callback: (places: Place[]) => void) => {
  const response = await fetchLocalMapBox(inputValue);

  const places = response.data.features.map((item: any) => {
    return ({
      label: item.place_name,
      value: item.place_name,
      position: {
        lat: item.center[1],
        lng: item.center[0]
      },
      place: item.place_name,
    });
  });

  callback(places);
};

const handleChangeSelect = (place: Place) => {
  setAddress(place);
  onChangeLocation({
    latitude: place.position.lat,
    longitude: place.position.lng,
    address: place.label!
  });
};
