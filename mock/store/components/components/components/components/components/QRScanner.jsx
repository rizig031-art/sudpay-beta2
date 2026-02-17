export default function QRScanner() {
  const handleScan = () => alert("Mock QR scanned! Payment done.");
  return <button onClick={handleScan}>Scan QR Code</button>;
}
