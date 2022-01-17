import React from 'react'
import Layout from '../../../components/Layout'
import PageContent from '../../../components/PageContent'
import { Seo } from '../../../components/Seo'
import { ControlsNav } from '../../../components/guides/controls'

export default () => {
    return (
        <Layout>
            <Seo
                title="SwitchControl"
                description="Easily add controls to your nivo charts."
            />
            <PageContent>
                <div className="guide__header">
                    <h1>SwitchControl</h1>
                </div>
            </PageContent>
            <ControlsNav/>
        </Layout>
    )
}
