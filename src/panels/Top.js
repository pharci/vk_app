import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Div, Group, PanelHeaderBack } from '@vkontakte/vkui';

const Top = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}>Топ</PanelHeader>
		<Group>
			<Div>
				<Button stretched size="l" mode="secondary">Кнопка</Button>
			</Div>
		</Group>
	</Panel>
);

Top.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Top;