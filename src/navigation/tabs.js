/**
 * Tabs Scenes
 *
 * Gotcha React Native Starter
 * https://bitbucket.org/teamgotcha/gc
 */
import React from 'react';
import { Scene } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';
import { AppStyles, AppSizes } from '@theme/';

// Components
import { TabIcon } from '@ui/';
import { NavbarMenuButton } from '@containers/ui/NavbarMenuButton/NavbarMenuButtonContainer';

// Scenes
import Placeholder from '@components/general/Placeholder';
import Error from '@components/general/Error';
import Profile from '@containers/profile/ProfileView';
import NewBook from '@containers/photobook/NewBook/NewBookContainer';
import EditBook from '@containers/photobook/EditBook/EditBookContainer';
import TemplateList from '@containers/photobook/Template/TemplateListContainer';
import CardFormView from '@containers/profile/payment/CardFormView';
import AboutUsView from '@containers/profile/aboutus/AboutUsView';

const navbarPropsTabs = {
  ...AppConfig.navbarProps,
  renderLeftButton: () => <NavbarMenuButton />,
  sceneStyle: {
    ...AppConfig.navbarProps.sceneStyle,
    paddingBottom: AppSizes.tabbarHeight,
  },
};

/* Routes ==================================================================== */
const scenes = (
  <Scene key={'tabBar'} tabs tabBarIconContainerStyle={AppStyles.tabbar} pressOpacity={0.95}>
    <Scene
      {...navbarPropsTabs}
      key={'photobook'}
      component={NewBook}
      title={'Photobook'}
      icon={props => TabIcon({ ...props, icon: 'photo-album' })}
    />

    <Scene
      {...navbarPropsTabs}
      key={'templateList'}
      component={TemplateList}
      title={'Choose a template'}
      analyticsDesc={'Choose a template'}
    />

    <Scene
      key={'EditBook'}
      {...navbarPropsTabs}
      title={'Photobook'}
      component={EditBook}
      analyticsDesc={'Edit book'}
    />
    
    <Scene
      key={'timeline'}
      {...navbarPropsTabs}
      title={'Coming Soon'}
      component={Placeholder}
      icon={props => TabIcon({ ...props, icon: 'timeline' })}
      analyticsDesc={'Placeholder: Coming Soon'}
    />

    <Scene
      key={'error'}
      {...navbarPropsTabs}
      title={'Example Error'}
      component={Error}
      icon={props => TabIcon({ ...props, icon: 'error' })}
      analyticsDesc={'Error: Example Error'}
    />

    <Scene
      key={'Profile'}
      {...navbarPropsTabs}
      title={'Profile'}
      component={Profile}
      icon={props => TabIcon({ ...props, icon: 'person' })}
      analyticsDesc={'Profile: Profile'}
    />
    {
      //Tech Debt: Nested Scene
    }
    <Scene
      key={'CardForm'}
      {...navbarPropsTabs}
      title={'Card Form'}
      component={CardFormView}
      analyticsDesc={'ApplePay'}
    />

    <Scene
      key={'AboutUs'}
      {...navbarPropsTabs}
      title={'About Us'}
      component={AboutUsView}
      analyticsDesc={'AboutUs'}
    />
  </Scene>
);

export default scenes;
