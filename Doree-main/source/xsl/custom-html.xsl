<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:import href="/home/codespace/.ptx/2.43.2/core/xsl/pretext-html.xsl"/>

  <!-- Use lettered subsection numbers: 2.1.A, 2.1.B, ... -->
  <xsl:template match="subsection" mode="serial-number">
    <xsl:variable name="relative-level">
      <xsl:apply-templates select="." mode="new-level" />
    </xsl:variable>
    <xsl:if test="not($relative-level &gt; $numbering-maxlevel)">
      <xsl:number format="A" count="subsection"/>
    </xsl:if>
  </xsl:template>

  <!-- Use lettered activity numbers within a section/chapter/article. -->
  <xsl:template match="activity" mode="serial-number">
    <xsl:number level="any" count="activity" from="section|chapter|appendix|article" format="A"/>
  </xsl:template>

  <!--
    Exercise review subsubsections are titled "Exercises for ..." and should
    not display a subsubsection codenumber.
  -->
  <xsl:template match="subsubsection[starts-with(normalize-space(title), 'Exercises for')]" mode="serial-number"/>

  <!-- Render exercises expanded by default (no click-to-reveal knowls). -->
  <xsl:template match="exercise" mode="is-hidden">
    <xsl:text>false</xsl:text>
  </xsl:template>

  <xsl:template match="exercises//exercise" mode="is-hidden">
    <xsl:text>false</xsl:text>
  </xsl:template>

  <xsl:template match="worksheet//exercise" mode="is-hidden">
    <xsl:text>false</xsl:text>
  </xsl:template>

  <xsl:template match="reading-questions//exercise" mode="is-hidden">
    <xsl:text>false</xsl:text>
  </xsl:template>

  <!-- Render authored hints as collapsed knowls by default. -->
  <xsl:template match="hint" mode="is-hidden">
    <xsl:text>true</xsl:text>
  </xsl:template>

  <!--
    Inline exercises are rendered as local numbered items within a section,
    e.g. "1. Practice", "2. Understand", instead of "Checkpoint 2.1.20 ...".
  -->
  <xsl:template match="exercise[not(ancestor::exercises or ancestor::worksheet or ancestor::reading-questions)]" mode="serial-number">
    <xsl:number level="any"
      count="exercise[not(ancestor::exercises or ancestor::worksheet or ancestor::reading-questions)]"
      from="section|chapter|appendix|article"
      format="1"/>
  </xsl:template>

  <xsl:template match="exercise[not(ancestor::exercises or ancestor::worksheet or ancestor::reading-questions)]" mode="number">
    <xsl:apply-templates select="." mode="serial-number"/>
  </xsl:template>

  <xsl:template match="exercise[not(ancestor::exercises or ancestor::worksheet or ancestor::reading-questions)]" mode="type-name"/>

  <xsl:template match="exercise[not(ancestor::exercises or ancestor::worksheet or ancestor::reading-questions)]" mode="heading-birth">
    <xsl:param name="heading-level"/>
    <xsl:apply-templates select="." mode="heading-divisional-exercise-serial">
      <xsl:with-param name="heading-level" select="$heading-level"/>
    </xsl:apply-templates>
  </xsl:template>

  <xsl:template match="exercise[not(ancestor::exercises or ancestor::worksheet or ancestor::reading-questions)]" mode="heading-solutions">
    <xsl:param name="heading-level"/>
    <xsl:apply-templates select="." mode="heading-divisional-exercise">
      <xsl:with-param name="heading-level" select="$heading-level"/>
      <xsl:with-param name="b-make-link" select="true()"/>
    </xsl:apply-templates>
  </xsl:template>

  <xsl:template match="exercise[not(ancestor::exercises or ancestor::worksheet or ancestor::reading-questions)]" mode="heading-xref-knowl">
    <xsl:param name="heading-level"/>
    <xsl:apply-templates select="." mode="heading-divisional-exercise-serial">
      <xsl:with-param name="heading-level" select="$heading-level"/>
    </xsl:apply-templates>
  </xsl:template>

  <!--
    In activity/example/theorem/remark/definition/exercise blocks,
    render first-level ordered-list parts as (a), (b), (c), ...
  -->
  <xsl:template
    match="ol[not(ancestor::ol)][ancestor::*[self::activity or self::example or self::theorem or self::proposition or self::lemma or self::corollary or self::remark or self::definition or self::exercise]]"
    mode="html-list-class">lower-alpha</xsl:template>

  <xsl:template
    match="ol[not(ancestor::ol)][ancestor::*[self::activity or self::example or self::theorem or self::proposition or self::lemma or self::corollary or self::remark or self::definition or self::exercise]]"
    mode="ol-marker-class">lower-alpha-level-1</xsl:template>

  <!--
    For first-level ordered-list parts in activity-like blocks,
    make serial numbers align with visible labels: (a), (b), (c), ...
  -->
  <xsl:template
    match="ol[not(ancestor::ol)][ancestor::exercise]/li"
    mode="serial-number">
    <xsl:text>(</xsl:text>
    <xsl:number format="a"/>
    <xsl:text>)</xsl:text>
  </xsl:template>

  <xsl:template
    match="ol[not(ancestor::ol)][ancestor::*[self::activity or self::example or self::theorem or self::proposition or self::lemma or self::corollary or self::remark or self::definition]][not(ancestor::exercise)]/li"
    mode="serial-number">
    <xsl:text>(</xsl:text>
    <xsl:number format="a"/>
    <xsl:text>)</xsl:text>
  </xsl:template>

  <!--
    If an xref targets one of these list-item parts and does not specify
    @text explicitly, use local style so references render as (a), (b), ...
    rather than "Item 1", "Item 2", ...
  -->
  <xsl:template
    match="xref[not(@text) and id(@ref)/self::li and id(@ref)/parent::ol[not(ancestor::ol)][ancestor::*[self::activity or self::example or self::theorem or self::proposition or self::lemma or self::corollary or self::remark or self::definition or self::exercise]]]"
    mode="get-text-style">
    <xsl:text>local</xsl:text>
  </xsl:template>

  <!--
    Put theorem-like headings on their own line (instead of run-in)
    so title and statement are visually separated.
  -->
  <xsl:template name="css-common">
    <xsl:if test="$b-needs-custom-marker-css">
      <link href="{$html.css.dir}/ol-markers.css" rel="stylesheet" type="text/css"/>
    </xsl:if>
    <xsl:if test="not($html.css.extra = '')">
      <xsl:variable name="csses" select="str:tokenize($html.css.extra, ', ')"/>
      <xsl:for-each select="$csses">
        <link rel="stylesheet" type="text/css">
          <xsl:attribute name="href">
            <xsl:value-of select="."/>
          </xsl:attribute>
        </link>
      </xsl:for-each>
    </xsl:if>
    <xsl:if test="$debug.developer.css = 'yes'">
      <xsl:comment> This HTML version has been built with elective CSS strictly </xsl:comment>
      <xsl:comment> for testing purposes, and the developer who chose to use it </xsl:comment>
      <xsl:comment> must supply it.                                             </xsl:comment>
      <link href="developer.css" rel="stylesheet" type="text/css" />
    </xsl:if>

    <style>
      .theorem-like &gt; .heading {
        display: block;
        margin-bottom: 0.35em;
      }
    </style>
  </xsl:template>
</xsl:stylesheet>
