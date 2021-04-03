import '@testing-library/jest-dom/extend-expect'

import {render, screen} from '@testing-library/svelte'

import Home from './Home.svelte'

import {i18nConfig} from '../../i18n'

describe("Test Home component", () => {
    it("Shows the translated eng strings", () => {
        i18nConfig()
        render(Home);
        expect(screen.findByText("MediaParty")).toBeTruthy()
        expect(screen.findByText("Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.")).toBeTruthy()
        expect(screen.findByText("Join existing party")).toBeTruthy()
        expect(screen.findByText("Create new party")).toBeTruthy()
    })
})