import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale/pt';
import { useSelector, useDispatch } from 'react-redux';
import { TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Camera from '../../components/Camera';
import api from '../../services/api';
import {
  cameraOn,
  cameraOff,
  saveImage,
} from '../../store/modules/camera/actions';

import {
  Container,
  Header,
  HeaderButton,
  HeaderTitle,
  Detail,
  ButtonText,
  ButtonCamera,
  Footer,
  Signature,
} from './styles';

export default function DeliveryConfirm({ navigation }) {
  const dispatch = useDispatch();
  const camera = useSelector((state) => state.camera.showCamera);
  const delivery = useSelector((state) => state.delivery.delivery);
  const [showCamera, setShowCamera] = useState(false);
  const [image, setImage] = useState(null);
  const [signature_id, setSignatureId] = useState(0);
  const profile = useSelector((state) => state.user.profile);
  useEffect(() => {
    setShowCamera(camera);
  }, [camera]);
  function handleBack() {
    navigation.navigate('Delivery');
  }

  function handleCamera() {
    dispatch(cameraOn());
    console.tron.log(camera);
  }

  function handleCameraOff() {
    dispatch(cameraOff());
  }

  async function handleSaveOrder() {
    const end_date = format(new Date(), 'yyyy-MM-dd hh:mm:ss', {
      locale: pt,
    });

    const resp = await api.put(
      `deliveryman/${delivery.id}/deliveries?date=${end_date}`,
      {
        id: delivery.id,
        end_date,
        signature_id,
      }
    );
    console.tron.log('resp', resp);
  }

  async function handleSaveImage() {
    try {
      const signatureData = new FormData();

      signatureData.append('file', {
        uri: image,
        name: image,
        type: 'image/jpg',
      });

      const response = await api.post('files/signature', signatureData);

      setSignatureId(response.data.id);
      handleSaveOrder();
    } catch (error) {
      console.tron.log(error);
    }
  }

  return (
    <>
      {showCamera ? (
        <Camera closeCamera={handleCameraOff} capture={setImage} />
      ) : (
        <>
          <Header>
            <HeaderButton>
              <TouchableOpacity onPress={handleBack}>
                <Icon name="chevron-left" size={40} color="#FFF" />
              </TouchableOpacity>
            </HeaderButton>
            <HeaderTitle>Confirmar entrega</HeaderTitle>
          </Header>

          <Container>
            <Detail>
              {image && <Signature source={{ uri: image }} />}

              <Footer>
                <ButtonCamera>
                  <TouchableOpacity onPress={handleCamera}>
                    <Icon name="photo-camera" size={32} color="#fff" />
                  </TouchableOpacity>
                </ButtonCamera>
              </Footer>
            </Detail>
            <TouchableOpacity onPress={handleSaveImage}>
              <ButtonText>Enviar</ButtonText>
            </TouchableOpacity>
          </Container>
        </>
      )}
    </>
  );
}
