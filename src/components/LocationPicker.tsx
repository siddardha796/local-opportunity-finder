import { useEffect, useRef } from "react";
import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

interface LocationPickerProps {
  onLocationSelect: (location: { name: string; address: string; lat: number; lng: number }) => void;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'gmp-map': any;
      'gmpx-place-picker': any;
      'gmp-advanced-marker': any;
    }
  }
}

const LocationPicker = ({ onLocationSelect }: LocationPickerProps) => {
  const mapRef = useRef<any>(null);
  const markerRef = useRef<any>(null);
  const placePickerRef = useRef<any>(null);

  useEffect(() => {
    const initMap = async () => {
      await customElements.whenDefined('gmp-map');
      
      const map = mapRef.current;
      const marker = markerRef.current;
      const placePicker = placePickerRef.current;

      if (!map || !marker || !placePicker) return;

      map.innerMap?.setOptions({
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      });

      placePicker.addEventListener('gmpx-placechange', () => {
        const place = placePicker.value;

        if (!place.location) {
          return;
        }

        if (place.viewport) {
          map.innerMap.fitBounds(place.viewport);
        } else {
          map.center = place.location;
          map.zoom = 15;
        }

        marker.position = place.location;

        onLocationSelect({
          name: place.displayName || place.name,
          address: place.formattedAddress || '',
          lat: place.location.lat,
          lng: place.location.lng,
        });
      });
    };

    initMap();
  }, [onLocationSelect]);

  return (
    <Card className="overflow-hidden border-border/50">
      <div className="p-4 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Select Location</h3>
        </div>
        <gmpx-place-picker 
          ref={placePickerRef}
          placeholder="Search Hyderabad locations..."
          style={{ width: '100%' }}
        />
      </div>
      <gmp-map 
        ref={mapRef}
        center="17.385044,78.486671" 
        zoom="12" 
        map-id="DEMO_MAP_ID"
        style={{ height: '400px', width: '100%' }}
      >
        <gmp-advanced-marker ref={markerRef} />
      </gmp-map>
    </Card>
  );
};

export default LocationPicker;
