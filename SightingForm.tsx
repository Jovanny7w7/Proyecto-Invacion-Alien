import { Camera, CameraResultType, CameraSource } from "@capacitor/camera"
import {
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonTextarea,
  IonSelect,
  IonSelectOption,
  IonToggle,
  IonToast,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonIcon,
} from "@ionic/react"
import { useState, useEffect, useRef } from "react"
import { saveSighting } from "../utils/storage"
import type { Sighting } from "../types"
import { camera, images, refresh, close } from "ionicons/icons"

export default function SightingForm() {
  // useState para guardar datos
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [fecha, setFecha] = useState("")
  const [lugar, setLugar] = useState("")
  const [tipoNave, setTipoNave] = useState("Disco")
  const [esHostil, setEsHostil] = useState(false)
  const [descripcion, setDescripcion] = useState("")
  const [ok, setOk] = useState(false)
  const [photo, setPhoto] = useState<string | null>(null)

  const [showCameraPreview, setShowCameraPreview] = useState(false)
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [facingMode, setFacingMode] = useState<"user" | "environment">("environment")
  const videoRef = useRef<HTMLVideoElement>(null)

  const startCameraPreview = async () => {
    const isWeb = !("capacitor" in window)

    if (isWeb && navigator.mediaDevices) {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode },
        })
        setStream(mediaStream)
        setShowCameraPreview(true)

        // Wait for modal to open and video element to be available
        setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.srcObject = mediaStream
          }
        }, 100)
      } catch (err) {
        console.error("No se pudo acceder a la webcam:", err)
        alert("No se pudo acceder a la cámara")
      }
    } else {
      // For mobile, directly use Capacitor Camera
      takePhotoMobile()
    }
  }

  const captureFromPreview = () => {
    if (videoRef.current && stream) {
      const canvas = document.createElement("canvas")
      canvas.width = videoRef.current.videoWidth
      canvas.height = videoRef.current.videoHeight
      canvas.getContext("2d")?.drawImage(videoRef.current, 0, 0)
      const dataUrl = canvas.toDataURL("image/png")

      setPhoto(dataUrl)
      closeCameraPreview()
    }
  }

  const closeCameraPreview = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop())
      setStream(null)
    }
    setShowCameraPreview(false)
  }

  const flipCamera = async () => {
    const newFacingMode = facingMode === "user" ? "environment" : "user"
    setFacingMode(newFacingMode)

    if (stream) {
      stream.getTracks().forEach((track) => track.stop())
    }

    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: newFacingMode },
      })
      setStream(mediaStream)

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream
      }
    } catch (err) {
      console.error("Error al cambiar cámara:", err)
    }
  }

  const takePhotoMobile = async () => {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      })
      setPhoto(image.dataUrl || null)
    } catch (error) {
      console.error("Error al tomar foto:", error)
    }
  }

  const selectFromGallery = async () => {
    const isWeb = !("capacitor" in window)

    if (isWeb) {
      // Web: use file input
      const input = document.createElement("input")
      input.type = "file"
      input.accept = "image/*"
      input.onchange = (e) => {
        const file = (e.target as HTMLInputElement).files?.[0]
        if (file) {
          const reader = new FileReader()
          reader.onload = (e) => {
            setPhoto(e.target?.result as string)
          }
          reader.readAsDataURL(file)
        }
      }
      input.click()
    } else {
      // Mobile: use Capacitor Camera
      try {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: CameraResultType.DataUrl,
          source: CameraSource.Photos,
        })
        setPhoto(image.dataUrl || null)
      } catch (error) {
        console.error("Error al seleccionar foto:", error)
      }
    }
  }

  const takePhoto = startCameraPreview // Modified to use preview

  // useEffect para cargar algo al iniciar
  useEffect(() => {
    console.log("Página cargada: Reportar Avistamiento")
  }, [])

  function submit() {
    if (!nombre || !email || !fecha || !lugar || !descripcion) {
      alert("Completa todos los campos obligatorios.")
      return
    }
    const payload: Sighting = {
      id: crypto.randomUUID(),
      nombre,
      email,
      fecha,
      lugar,
      tipoNave,
      esHostil,
      descripcion,
      photo, // Added photo to the payload so it gets saved with the sighting
      createdAt: Date.now(),
    }
    saveSighting(payload)
    setOk(true)
    setNombre("")
    setEmail("")
    setFecha("")
    setLugar("")
    setTipoNave("Disco")
    setEsHostil(false)
    setDescripcion("")
    setPhoto(null) // Reset photo on submit
  }

  return (
    <>
      <IonList className="card-blur ion-padding">
        <IonItem>
          <IonLabel position="stacked">Nombre*</IonLabel>
          <IonInput value={nombre} onIonInput={(e) => setNombre(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Email*</IonLabel>
          <IonInput type="email" value={email} onIonInput={(e) => setEmail(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Fecha*</IonLabel>
          <IonInput type="date" value={fecha} onIonInput={(e) => setFecha(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Lugar*</IonLabel>
          <IonInput value={lugar} onIonInput={(e) => setLugar(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Tipo de nave</IonLabel>
          <IonSelect value={tipoNave} onIonChange={(e) => setTipoNave(e.detail.value)}>
            <IonSelectOption>Disco</IonSelectOption>
            <IonSelectOption>Triangular</IonSelectOption>
            <IonSelectOption>Cigarro</IonSelectOption>
            <IonSelectOption>Esfera</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonLabel>¿Comportamiento hostil?</IonLabel>
          <IonToggle checked={esHostil} onIonChange={(e) => setEsHostil(e.detail.checked)} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Descripción*</IonLabel>
          <IonTextarea autoGrow value={descripcion} onIonInput={(e) => setDescripcion(e.detail.value!)} />
        </IonItem>

        <IonItem>
          <IonLabel>Foto (opcional)</IonLabel>
          <div style={{ display: "flex", gap: "8px" }}>
            <IonButton size="small" onClick={takePhoto}>
              <IonIcon icon={camera} slot="start" />
              Cámara
            </IonButton>
            <IonButton size="small" fill="outline" onClick={selectFromGallery}>
              <IonIcon icon={images} slot="start" />
              Galería
            </IonButton>
          </div>
        </IonItem>

        {photo && (
          <IonItem>
            <div style={{ width: "100%" }}>
              <img src={photo || "/placeholder.svg"} alt="Avistamiento" style={{ width: "100%", borderRadius: 8 }} />
              <IonButton
                size="small"
                fill="clear"
                color="danger"
                onClick={() => setPhoto(null)}
                style={{ marginTop: "8px" }}
              >
                Eliminar foto
              </IonButton>
            </div>
          </IonItem>
        )}

        <div className="ion-padding">
          <IonButton expand="block" onClick={submit}>
            Enviar reporte
          </IonButton>
        </div>
      </IonList>

      <IonModal isOpen={showCameraPreview} onDidDismiss={closeCameraPreview}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Tomar Foto</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={closeCameraPreview}>
                <IonIcon icon={close} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            {/* Camera controls */}
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <IonButton
                fill="clear"
                size="large"
                onClick={flipCamera}
                style={{
                  "--color": "white",
                  "--background": "rgba(0,0,0,0.3)",
                  "--border-radius": "50%",
                }}
              >
                <IonIcon icon={refresh} size="large" />
              </IonButton>

              <IonButton
                size="large"
                onClick={captureFromPreview}
                style={{
                  "--background": "white",
                  "--color": "black",
                  "--border-radius": "50%",
                  width: "70px",
                  height: "70px",
                }}
              >
                <IonIcon icon={camera} size="large" />
              </IonButton>

              <IonButton
                fill="clear"
                size="large"
                onClick={selectFromGallery}
                style={{
                  "--color": "white",
                  "--background": "rgba(0,0,0,0.3)",
                  "--border-radius": "50%",
                }}
              >
                <IonIcon icon={images} size="large" />
              </IonButton>
            </div>
          </div>
        </IonContent>
      </IonModal>

      <IonToast
        isOpen={ok}
        message="¡Reporte enviado y guardado localmente!"
        duration={1600}
        onDidDismiss={() => setOk(false)}
      />
    </>
  )
}
